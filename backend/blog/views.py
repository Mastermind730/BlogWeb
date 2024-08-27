from django.urls import path, include
from rest_framework import generics, status, viewsets
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.decorators import action
from rest_framework.exceptions import ValidationError
from django.contrib.auth import authenticate
from rest_framework.authtoken.models import Token
from django.http import JsonResponse
import requests
from bs4 import BeautifulSoup
import logging
from .models import Post, Comment, Reply
from .serializers import PostSerializer, RegisterSerializer, CommentSerializer, ReplySerializer
from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Article, UserArticleInteraction
from .serializers import ArticleSerializer, UserArticleInteractionSerializer

# Set up logging
logger = logging.getLogger(__name__)

class RegisterView(generics.CreateAPIView):
    serializer_class = RegisterSerializer

    def create(self, request, *args, **kwargs):
        print("Request data:", request.data)
        
        serializer = self.get_serializer(data=request.data)
        try:
            serializer.is_valid(raise_exception=True)
        except ValidationError as e:
            print("Validation Error:", serializer.errors)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        
        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)

class LoginView(APIView):
    def post(self, request, *args, **kwargs):
        username = request.data.get('username')
        password = request.data.get('password')
        
        user = authenticate(request, username=username, password=password)
        
        if user is not None:
            # Create or get the token for the authenticated user
            token, created = Token.objects.get_or_create(user=user)
            return Response({
                'token': token.key,
                'username': user.username,
                'email': user.email
            }, status=status.HTTP_200_OK)
        else:
            return Response({'error': 'Invalid credentials'}, status=status.HTTP_400_BAD_REQUEST)

class PostList(generics.ListCreateAPIView):
    queryset = Post.objects.all().order_by('-created_at')
    serializer_class = PostSerializer

class PostDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer

def technology_articles(request):
    url = 'https://medium.com/tag/technology'
    try:
        response = requests.get(url)
        response.raise_for_status()  # Check for HTTP errors
    except requests.RequestException as e:
        # Log the error
        logger.error(f"Failed to retrieve data from {url}. Error details: {e}")
        return JsonResponse({"error": "Failed to retrieve data", "details": str(e)}, status=500)

    soup = BeautifulSoup(response.content, 'html.parser')
    articles = []

    for post in soup.find_all('div', class_='postArticle'):
        title = post.find('h3').get_text() if post.find('h3') else 'No Title'
        link = post.find('a')['href'] if post.find('a') else 'No Link'
        author = post.find('a', class_='ds-link').get_text() if post.find('a', class_='ds-link') else 'No Author'
        preview = post.find('p').get_text() if post.find('p') else 'No Preview'
        
        articles.append({
            "title": title,
            "link": link,
            "author": author,
            "preview": preview,
        })

    return JsonResponse(articles, safe=False)

logger = logging.getLogger(__name__)

class CommentViewSet(viewsets.ModelViewSet):
    print("method called")
    queryset = Comment.objects.all().order_by('-created_at')
    serializer_class = CommentSerializer
    
    def create(self, request, *args, **kwargs):
        logger.debug("Received request data: %s", request.data)
        
        try:
            # Automatically assign the currently authenticated user to the comment
            # request.data['user'] = request.user.username

            serializer = self.get_serializer(data=request.data)
            serializer.is_valid(raise_exception=True)
            self.perform_create(serializer)
            headers = self.get_success_headers(serializer.data)
            logger.info("Comment created successfully: %s", serializer.data)
            return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)

        except ValidationError as e:
            logger.error("Validation Error Details: %s", e.detail)
            return Response({'validation_errors': e.detail}, status=status.HTTP_400_BAD_REQUEST)
        except ObjectDoesNotExist as e:
            logger.error("Object Does Not Exist: %s", str(e))
            return Response({'error': str(e)}, status=status.HTTP_400_BAD_REQUEST)
        except Exception as e:
            logger.error("General Error: %s", str(e))
            return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
    
    def update(self, request, *args, **kwargs):
        logger.debug("Received request data: %s", request.data)
        
        partial = kwargs.pop('partial', False)
        instance = self.get_object()
        
        try:
            serializer = self.get_serializer(instance, data=request.data, partial=partial)
            serializer.is_valid(raise_exception=True)
            self.perform_update(serializer)
            logger.info("Comment updated successfully: %s", serializer.data)
            return Response(serializer.data)

        except ValidationError as e:
            logger.error("Validation Error Details: %s", e.detail)
            return Response({'validation_errors': e.detail}, status=status.HTTP_400_BAD_REQUEST)
        except ObjectDoesNotExist as e:
            logger.error("Object Does Not Exist: %s", str(e))
            return Response({'error': str(e)}, status=status.HTTP_400_BAD_REQUEST)
        except Exception as e:
            logger.error("General Error: %s", str(e))
            return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

    @action(detail=True, methods=['post'])
    def reply(self, request,pk=None):
        print("method being called")
        comment = self.get_object()
        
        # Validate and extract data from the request
        reply_text = request.data.get('reply',None)
        if not reply_text:
            return Response({'error': 'Reply content is required'}, status=status.HTTP_400_BAD_REQUEST)

        try:
            # Create a reply object and assign the currently authenticated user
            print("reply creating")
            reply = Reply.objects.create(
                comment=comment,
                reply=reply_text,
                
 # Assign the currently authenticated user
 
            )
            print(reply)
            serializer = ReplySerializer(reply)
            logger.info("Reply created successfully: %s", serializer.data)
            return Response(serializer.data, status=status.HTTP_201_CREATED)

        except ValidationError as e:
            logger.error("Validation Error Details: %s", e.detail)
            return Response({'validation_errors': e.detail}, status=status.HTTP_400_BAD_REQUEST)
        except ObjectDoesNotExist as e:
            logger.error("Object Does Not Exist: %s", str(e))
            return Response({'error': str(e)}, status=status.HTTP_404_NOT_FOUND)
        except Exception as e:
            logger.error("General Error: %s", str(e))
            return Response({'error': 'An internal server error occurred'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)



@api_view(['POST'])
def toggle_like_article(request, article_id):
    user = request.user
    try:
        article = Article.objects.get(id=article_id)
    except Article.DoesNotExist:
        return Response({"error": "Article not found"}, status=status.HTTP_404_NOT_FOUND)

    interaction, created = UserArticleInteraction.objects.get_or_create(user=user, article=article)
    interaction.is_liked = not interaction.is_liked
    interaction.save()

    return Response({"message": "Success"}, status=status.HTTP_200_OK)

@api_view(['POST'])
def toggle_bookmark_article(request, article_id):
    user = request.user
    try:
        article = Article.objects.get(id=article_id)
    except Article.DoesNotExist:
        return Response({"error": "Article not found"}, status=status.HTTP_404_NOT_FOUND)

    interaction, created = UserArticleInteraction.objects.get_or_create(user=user, article=article)
    interaction.is_bookmarked = not interaction.is_bookmarked
    interaction.save()

    return Response({"message": "Success"}, status=status.HTTP_200_OK)

@api_view(['GET'])
def get_user_articles(request):
    user = request.user
    interactions = UserArticleInteraction.objects.filter(user=user)
    serializer = UserArticleInteractionSerializer(interactions, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)

# views.py
from rest_framework import generics, permissions
from .models import BlogPost
from .serializers import BlogPostSerializer

class BlogPostListCreateView(generics.ListCreateAPIView):
    queryset = BlogPost.objects.all().order_by('-date_created')
    serializer_class = BlogPostSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

    def perform_create(self, serializer):
        serializer.save(author=self.request.user)
