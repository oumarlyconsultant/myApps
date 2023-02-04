from django.contrib import admin
from django.urls import path, include

from . import views

app_name = 'gestionPersonnel'

urlpatterns = [
    path("",views.repertoire_employes,name='repertoire_employes')
]