from django.urls import path, include  # Include 'include' here
from . import views
from .views import RegisterView
from .views import LoginView
from django.urls import path
from .views import technology_articles


from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

urlpatterns = [
    path('posts/', views.PostList.as_view(), name='post_list'),
    path('posts/<int:pk>/', views.PostDetail.as_view(), name='post_detail'),
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('api/auth/', include('rest_framework.urls')),  # Fixed path for REST framework's built-in auth views
    path('register/', RegisterView.as_view(), name='register'),
    path('login/', LoginView.as_view(), name='login'),
        path('technology/', technology_articles, name='technology_articles'),


]
