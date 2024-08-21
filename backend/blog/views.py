from rest_framework import generics
from .models import Post
from .serializers import PostSerializer
from rest_framework import generics
from rest_framework.response import Response
from rest_framework import status
from .serializers import RegisterSerializer
from rest_framework.exceptions import ValidationError
from django.contrib.auth import authenticate
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.authtoken.models import Token



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
# views.py

from django.http import JsonResponse

from django.http import JsonResponse
from playwright.sync_api import sync_playwright

# views.py
import requests
from bs4 import BeautifulSoup
from django.http import JsonResponse

import requests
from bs4 import BeautifulSoup
from django.http import JsonResponse
import logging

# Set up logging
logger = logging.getLogger(__name__)

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

