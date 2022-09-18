from pyexpat import model
from tkinter import CASCADE
from django.db import models

class Board(models.Model):
    pass

class List(models.Model):
    name = models.TextField(max_length=200)
    board = models.ForeignKey(Board, on_delete=models.CASCADE)

class Item(models.Model):
    content = models.TextField(max_length=500)
    list = models.ForeignKey(List, on_delete=models.CASCADE)
    image = models.ImageField()