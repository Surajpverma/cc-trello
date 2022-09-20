from django.contrib import admin
from .models import List, Item,Board

admin.site.register(Item)
admin.site.register(List)
admin.site.register(Board)