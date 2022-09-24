from django.urls import path
from .views import *
urlpatterns = [
    path('BoardListView/',BoardListView.as_view()),
    path('BoardView/', BoardView.as_view()),
    path('ModifyListView/', ModifyListView.as_view())
]