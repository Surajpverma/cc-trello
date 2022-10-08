from django.shortcuts import render
from .models import *
from rest_framework import status
from rest_framework.views import APIView, Response
import json
from django.contrib.auth.mixins import LoginRequiredMixin


class BoardView(APIView):
    def get(self, request):
        board_id = request.data['id']
        board = Board.objects.filter(id=board_id).first()
        response  = []
        for list in board.list_set.all():
            for item in list.item_set.all():
                response.append({
                    "list_id": list.id,
                    "items": {
                        "item_id": item.id,
                        "item_content": item.content
                    }
                })
        return Response(response, status=status.HTTP_200_OK)


class ModifyListView(APIView):
    def post(self, request):
        #Editing Item Content
        edited_content = request.data['edited_content']
        for data in edited_content:
            item = Item.objects.filter(id=data['id']).first()
            item.content = data['content']
            item.save()
        
        # Delete Item
        item_ids = request.data['item_ids']
        for id in item_ids:
            item = Item.objects.filter(id=id['id']).first()
            item.delete()
        
        #Delete List
        list_ids = request.data['list_ids']
        for list_id in list_ids:
            list = List.objects.filter(id=list_id['id']).first()
            list.delete()

        #NewList
        board_id =request.data['id']
        board = Board.objects.filter(id=board_id).first()
        new_list_names=request.data['new_list_name']
        for new_list_name in new_list_names:
            list = List.objects.create(name=new_list_name['name'], board=board)
            list.save() 
             
        #ModifyList
        modified_lists=request.data['modified_lists']
        for data in modified_lists:
            modified_list=List.objects.filter(id=data['id']).first()           
            modified_list.name=data['name']
            modified_list.save()
        
        return Response({"msg":"Success"}, status = status.HTTP_200_OK)

class BoardListView(APIView):
    def get(self, request):
        boards=Board.objects.filter(user=request.user.id)
        response = []
        print(boards)
        for res in boards:
            response.append({
                "id":res.id,
                "name":res.name
            })
        return Response(response, status = status.HTTP_200_OK)
    
    def post(self, request):
        board_name=request.data['name']
        exists = Board.objects.filter(name=board_name)   
        if exists :
            return Response({"msg":"Board already exists"}, status = status.HTTP_403_FORBIDDEN)

        else:
            
            Board.objects.create(name=board_name,user=request.user)
            return Response({"msg":"Board created"},status = status.HTTP_201_CREATED)
        
