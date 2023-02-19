from django.shortcuts import render, redirect
from django.http import HttpResponse
from django.http import Http404
# from django.views.generic.list import ListView
# from django.views.generic.detail import DetailView
from django.views.generic import View, ListView, DetailView, CreateView, UpdateView, TemplateView, FormView, DeleteView
from django.urls import reverse, reverse_lazy
from . import forms
from . import models


class EmployeCreateView(CreateView):
    model = models.Employe
    fields = ('prenom','nom','dateNaissance','sexe','adresseDom','ville','pays','responsable')

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

def EmployeTermPosteForm(request,pk):
    if pk:

        employe = models.Employe.objects.get(numeroEmploye=pk)
        ini_data = {
            'employe':employe
        }
        posteForm = forms.EmployePosteForm(initial=ini_data)
        termForm = forms.TermEmploiForm(initial=ini_data)
        paieForm = forms.TermPaieForm(initial=ini_data)

    if request.method == 'POST':
        posteForm = forms.EmployePosteForm(request.POST)
        termForm = forms.TermEmploiForm(request.POST)
        paieForm = forms.TermPaieForm(request.POST)

        if posteForm.is_valid() and termForm.is_valid() and paieForm.is_valid():
            posteForm.save(commit=True)
            termForm.save(commit=True)
            paieForm.save(commit=True)

            return redirect('gestionPersonnel:list')
        else:
            print('ERREUR! Formulaire invalid :(')
    context = {
        'posteForm':posteForm,
        'termForm':termForm,
        'paieForm':paieForm,
        'employe':employe
    }
    return render(request,"gestionPersonnel/employe_term_form.html",context)

# this_employe = models.Employe.objects.get(numeroEmploye = pk)


# if request == 'POST':
#     employe_poste = forms.EmployePosteForm(request.POST)
#     employe_term_emp = forms.TermEmploiForm(request.POST)
#     employe_term_paie = forms.TermPaieForm(request.POST)
#     if employe_poste.is_valid() and employe_term_emp.is_valid() and employe_term_paie.is_valid():
#         employe_poste.save()
#         employe_term_emp.save()
#         employe_term_paie.save()


# if request == 'POST':
#     if employe_poste.is_valid() and employe_term_emp.is_valid() and employe_term_paie.is_valid():
#         employe_poste.save()
#         employe_term_emp.save()
#         employe_term_paie.save()
#     else:
#         print("Erreur dans l'un des formulaires! Veuillez verifier les info encore!")
# context = {
#     'employe_poste':employe_poste,
#     'employe_term_emp':employe_term_emp,
#     'employe_term_paie':employe_term_paie,
# }
# return render(request,'gestionPersonnel/employe_term_form.html',context)


# def form_valid(self,form):
#     employe = form['employe_infoPerso'].save()
#     employe_termEmploi = form['employe_termEmploi'].save(commit=False)
#     employe_poste = form['employe_poste'].save(commit=False)
#     employe_termPaie = form['employe_termPaie'].save(commit=False)

#     employe_termEmploi.employe = employe
#     employe_poste.employe = employe
#     employe_termPaie.employe = employe

#     employe_termEmploi.save()
#     employe_poste.save()
#     employe_termPaie.save()


# def rapport(request):
#     return render(request,"repertoire_employes.html",{})

