from django.contrib import admin
from django.urls import path, include

from . import views

app_name = 'acceuil'

urlpatterns = [
    path("",views.page_acceuil,name='page_acceuil')
]