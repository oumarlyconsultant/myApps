from django.contrib import admin
from django.urls import path, include

from . import views

app_name = 'gestionStock'

urlpatterns = [
    path("",views.acceuil_principal,name='acceuil_principal')
]