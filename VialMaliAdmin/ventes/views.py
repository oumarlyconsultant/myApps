from django.shortcuts import render, redirect
from django.utils import timezone
from django.http import HttpResponse, HttpResponseRedirect
from django.http import Http404
from django.urls import reverse, reverse_lazy
from django.views.generic import View, ListView, DetailView, CreateView, UpdateView, TemplateView, FormView, DeleteView
from . import models, forms
from django.core.paginator import Paginator
from django.contrib import messages
# from django.contrib.messages.views import SuccessMessageMixin
# from . import forms
# from . import models

class index(TemplateView):
    template_name = "./ventes/ventes.html"

class clientsIndex(TemplateView):
    template_name = "./ventes/ventes_clients.html"
   
class clientsDetails(DetailView):
    model = models.Client
    template_name = "./ventes/ventes_clients_details.html"
    
    # def get_context_data(self, **kwargs):
    #     context = super().get_context_data(**kwargs)
    #     return context

class clientsModifier(UpdateView):
    model = models.Client
    template_name = "./ventes/ventes_clients_modifier.html"
    fields = '__all__'

class clientsSupprimer(DeleteView):
    model = models.Client
    # context_object_name = 'client'
    success_url = reverse_lazy('ventes:clientsRepertoire')
    template_name = "./ventes/ventes_clients_supprimer.html"

class clientsAjouter(CreateView):
    model = models.Client
    template_name = "./ventes/ventes_clients_ajouter.html"
    fields = ('prenom','nom','nomEntreprise','adresse','telephone','email','info','ville','pays')
    extra_context={'success':'1'}

    # def get_context_data(self, **kwargs):
    #     context = super(cl).get_context_data(**kwargs)
    #     context["success"] = '1'
    #     print(context)
    #     return context
    # success_message = "Nouveau profile client cree"
    

    # def get_success_message(self, cleaned_data):
    #     return "Nouveau profile client cree avec succes!"
    
    # def get_sucess_url(self):
    #     success_url = reverse_lazy('ventes:clientsDetails',kwargs={'pk':self.kwargs['pk']})
    #     return success_url

    # def post(self,request,*args,**kwargs):
    #     if "annuler" in request.POST:
    #         return HttpResponseRedirect(reverse('ventes:clientsIndex'))
    #     else:
    #         return super(clientsAjouter,self).post(request,*args,**kwargs)

def clientsListeRecherche(request):
    # print(request.GET)
    # print(dir(request))
    query_dict = request.GET
    query = query_dict.get("q")
    if query is not None:
        object_list = models.Client.objects.filter(prenom__contains=query) | models.Client.objects.filter(nom__contains=query) | models.Client.objects.filter(nomEntreprise__contains=query)
        # if object_list.count() > 10:
        #     page_number = request.GET.get('page')
        #     paginator = Paginator(object_list,10)
        #     page_obj = paginator.get_page(page_number)
        # else:
        #     page_obj = 1
        context = {
            "query":query,
            "objects":object_list,
            # "page_obj":page_obj,
        }

    else:
        context = {}
    template_name = "./ventes/ventes_clients_repertoire.html"
    return render(request,template_name,context=context)

    model = models.Client
    paginate_by = 10
    
    form_class = forms.clientSearchForm
    filter_class = clientsFiltre

class devisIndex(TemplateView):
    template_name = "./ventes/ventes_devis_et_factures.html"