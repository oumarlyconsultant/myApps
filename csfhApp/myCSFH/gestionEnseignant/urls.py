from django.urls import path,re_path
from django.contrib import admin
from . import views

app_name = 'gestionEnseignant'

urlpatterns = [
    path('',views.index,name='index'),
    re_path(r'^enregistrer/$',views.register,name='register'),
]