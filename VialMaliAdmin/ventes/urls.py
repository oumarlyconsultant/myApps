from django.contrib import admin
from django.urls import path, include, re_path

from . import views

app_name = 'ventes'

urlpatterns = [
    re_path(r'^$',views.index.as_view(),name='index'),
    re_path(r'^clients/$',views.clientsIndex.as_view(),name='clientsIndex'),
    re_path(r'^clients/repertoire/$',views.clientsRepertoire.as_view(),name='clientsRepertoire'),
    re_path(r'^clients/details/(?P<pk>\d+)/$',views.clientsDetails.as_view(),name='clientsDetails'),
    re_path(r'^clients/ajouter/$',views.clientsAjouter.as_view(),name='clientsAjouter'),
]