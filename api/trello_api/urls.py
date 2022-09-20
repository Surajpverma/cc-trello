from django.urls import path
from .views import *
urlpatterns = [
    path('BoardListView/',BoardListView.as_view())
]