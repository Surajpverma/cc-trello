from pyexpat import model
from django.db import models
from django.contrib.auth import get_user_model
User = get_user_model()
      
class Board(models.Model):
    name=models.TextField(max_length=200)
    user=models.ForeignKey(User, on_delete=models.CASCADE)

class List(models.Model):
    name = models.TextField(max_length=200)
    board = models.ForeignKey(Board, on_delete=models.CASCADE)

class Item(models.Model):
    content = models.TextField(max_length=500)
    list = models.ForeignKey(List, on_delete=models.CASCADE)
    # image = models.ImageField()
