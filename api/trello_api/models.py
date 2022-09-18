from pyexpat import model
from tkinter import CASCADE
from django.db import models


class List(models.Model):
    pass

class Item(models.Model):
    content = models.TextField(max_length=500)
    list = models.ForeignKey(List, on_delete=models.CASCADE)
    image = models.ImageField()