from django.contrib import admin
from django.urls import path, include, re_path

from . import views

app_name = 'inventaires_et_stock'

urlpatterns = [
    re_path(r'^$',views.index.as_view(),name='index'),
    re_path(r'^consulter_stock/$',views.consulter_stockIndex.as_view(),name='consulter_stockIndex'),
    re_path(r'^bons_de_commande/$',views.bons_de_commandeIndex.as_view(),name='bons_de_commandeIndex'),
    re_path(r'^approvisionnements/$',views.approvisionnementsIndex.as_view(),name='approvisionnementsIndex'),
    re_path(r'^articles/$',views.articlesIndex.as_view(),name='articlesIndex'),
]