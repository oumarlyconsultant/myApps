from django.contrib import admin
from django.urls import path, include, re_path

from . import views

app_name = 'inventaires_et_stock'

urlpatterns = [
    re_path(r'^$',views.index.as_view(),name='index'),
]