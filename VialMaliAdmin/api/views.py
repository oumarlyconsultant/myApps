from django.shortcuts import render, redirect
from django.utils import timezone
from django.http import HttpResponse, HttpResponseRedirect
from django.http import Http404
from django.urls import reverse, reverse_lazy
from django.views.generic import View, ListView, DetailView, CreateView, UpdateView, TemplateView, FormView, DeleteView
from . import models
from django.core.paginator import Paginator
from django.contrib import messages
from . import serializers as srz
from rest_framework import generics, status

# Create your views here.
# class index(TemplateView):
#     template_name = "./acceuil/acceuil.html"

class PaysListView(generics.ListAPIView):
    model = models.Pays
    serializer_class = srz.PaysSerializer