from django.shortcuts import render, redirect
from django.http import HttpResponse
from django.http import Http404
from django.urls import reverse, reverse_lazy
from django.views.generic import View, ListView, DetailView, CreateView, UpdateView, TemplateView, FormView, DeleteView
# from . import forms
# from . import models

class index(TemplateView):
    template_name = "./personnel/personnel.html"