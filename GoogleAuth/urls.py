from django.contrib import admin
from django.urls import path
from django.conf.urls import include
from .views import GoogleLogin 

urlpatterns = [
    path('dj-rest-auth/google/', GoogleLogin.as_view(), name='google_login'),
]