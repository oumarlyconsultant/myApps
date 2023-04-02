from django.shortcuts import render, redirect
from django.utils import timezone
from django.http import HttpResponse, HttpResponseRedirect
from django.http import Http404
from django.urls import reverse, reverse_lazy
from django.views.generic import View, ListView, DetailView, CreateView, UpdateView, TemplateView, FormView, DeleteView
from . import models, forms
from django.contrib.messages.views import SuccessMessageMixin
# from . import forms
# from . import models

class index(TemplateView):
    template_name = "ventes.html"

class clientsIndex(TemplateView):
    template_name = "ventes_clients.html"

class clientsRepertoire(ListView):
    model = models.Client
    paginate_by = 100
    template_name = "ventes_clients_repertoire.html"
    
    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        return context
    
class clientsDetails(DetailView):
    model = models.Client
    template_name = "ventes_clients_details.html"
    
    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        return context
    
class clientsAjouter(SuccessMessageMixin,CreateView):
    model = models.Client
    template_name = "ventes_clients_ajouter.html"
    fields = ('prenom','nom','nomEntreprise','adresse','telephone','email','info','ville','pays')
    success_message = "Nouveau profile client cree"
    success_url = reverse_lazy('ventes:clientsRepertoire')

    def get_success_message(self, cleaned_data):
        return "Nouveau profile client cree avec succes!"

    def post(self,request,*args,**kwargs):
        if "annuler" in request.POST:
            return HttpResponseRedirect(reverse('ventes:clientsIndex'))
        else:
            return super(clientsAjouter,self).post(request,*args,**kwargs)
    
    # template_name = 'ventes_clients_ajouter.html'
    # success_url = reverse_lazy('success')

    # def form_valid(self, form):
    #     instance = form.save()
    #     return HttpResponse(f"contact saved: {instance}")

    # def form_valid(self, form):
    #     form.instance.user = self.request.user
    #     messages.success(self.request,"Nouveau profile client cree avec success!")
    #     return super(clientsAjouter,self).form_valid(form)
