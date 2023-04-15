from django.contrib import admin
from django.urls import path, include, re_path

from . import views

app_name = 'acceuil'

urlpatterns = [
    re_path(r'^$',views.acceuil,name='acceuil'),
]