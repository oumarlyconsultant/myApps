from django.contrib import admin
from django.urls import path, include, re_path

from . import views

app_name = 'api'

urlpatterns = [
    path('',views.PaysListView.as_view(),name='listPays'),
]