from django.shortcuts import render

# Create your views here.
from rest_framework.decorators import api_view
from rest_framework.response import Response

@api_view(['GET'])
def saludo(request):
    return Response({'mensaje': 'Hola desde Django'})