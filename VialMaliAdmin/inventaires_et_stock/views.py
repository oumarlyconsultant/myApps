from django.shortcuts import render, redirect
from django.utils import timezone
from django.http import HttpResponse, HttpResponseRedirect
from django.http import Http404
from django.urls import reverse, reverse_lazy
from django.views.generic import View, ListView, DetailView, CreateView, UpdateView, TemplateView, FormView, DeleteView
from django.core.paginator import Paginator
from django.contrib.messages.views import SuccessMessageMixin

class index(TemplateView):
    template_name = "./inventaires_et_stock/inventaires_et_stock.html"

class consulter_stockIndex(TemplateView):
    template_name = "./inventaires_et_stock/inventaires_et_stock_consulter.html"

class bons_de_commandeIndex(TemplateView):
    template_name = "./inventaires_et_stock/inventaires_et_stock_bons.html"

class approvisionnementsIndex(TemplateView):
    template_name = "./inventaires_et_stock/inventaires_et_stock_approv.html"

class articlesIndex(TemplateView):
    template_name = "./inventaires_et_stock/inventaires_et_stock_articles.html"