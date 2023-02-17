from django.shortcuts import render, redirect
from django.http import HttpResponse
from django.http import Http404
# from django.views.generic.list import ListView
# from django.views.generic.detail import DetailView
from django.views.generic import ListView, DetailView, CreateView, UpdateView, TemplateView

from . import forms
from . import models

# Create your views here.
# def repertoire(request):
#     tout_employe = models.Employe.objects.all().values()
#     context = {
#         'toutEmp':tout_employe
#     }
#     return render(request,"gestionPersonnel/repertoire_employes.html",context)

class EmployeListView(ListView):

    model = models.Employe
    context_object_name = 'employes'
    # paginate_by = 10
    # template_name = ...

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        return context

class EmployeDetailView(DetailView):
    context_object_name = 'employes'
    model = models.Employe
    # slug_field = '<uuid:numeroEmploye>'
    # slug_url_kwarg = '<uuid:numeroEmploye>'
    # paginate_by = 10
    # template_name = ...

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        return context

class EmployeCreateView(CreateView):
    model = models.Employe
    fields = ('prenom','nom','dateNaissance','sexe','adresseDom','ville','pays','responsable')

class EmployeListUpdate(ListView):
    model = models.Employe
    context_object_name = 'employes'
    template_name = 'gestionPersonnel/employe_list_update.html'
    
class EmployeUpdateView(UpdateView):
    model = models.Employe
    fields = ('prenom','nom','dateNaissance','sexe','adresseDom','ville','pays','responsable')


# def rapport(request):
#     return render(request,"repertoire_employes.html",{})

# def nouvelEmp(request):
#     empForm = forms.EmployeForm()
#     termForm = forms.TermEmploiForm()
#     paieForm = forms.TermPaieForm()

#     if request.method == 'POST':
#         empForm = forms.EmployeForm(request.POST)
#         if empForm.is_valid():
#             empForm.save(commit=True)
#             return repertoire(request)
#         else:
#             print('ERREUR! Formulaire invalid :(')
#     context = {
#         'empForm':empForm
#     }
#     return render(request,"gestionPersonnel/nouvel_employe.html",context)

# def modifEmp(request):
#     return render(request,"repertoire_employes.html",{})