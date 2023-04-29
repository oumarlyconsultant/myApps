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
from rest_framework import generics, status, viewsets, status, response, views
from .forms import ClientForm

# Create your views here.
# class index(TemplateView):
#     template_name = "./acceuil/acceuil.html"

############# SERIALIZERS ##################
class PaysView(viewsets.ModelViewSet):
    serializer_class = srz.PaysSerializer
    queryset = models.Pays.objects.all()

class VilleView(viewsets.ModelViewSet):
    serializer_class = srz.VilleSerializer
    queryset = models.Ville.objects.all()

class DepartementView(viewsets.ModelViewSet):
    serializer_class = srz.DepartementSerializer
    queryset = models.Departement.objects.all()

class PosteView(viewsets.ModelViewSet):
    serializer_class = srz.PosteSerializer
    queryset = models.Poste.objects.all()

class EmployeView(viewsets.ModelViewSet):
    serializer_class = srz.EmployeSerializer
    queryset = models.Employe.objects.all()

class TermesEmploiView(viewsets.ModelViewSet):
    serializer_class = srz.TermesEmploiSerializer
    queryset = models.TermesEmploi.objects.all()

class ClasseView(viewsets.ModelViewSet):
    serializer_class = srz.ClasseSerializer
    queryset = models.Classe.objects.all()

class CouleurView(viewsets.ModelViewSet):
    serializer_class = srz.CouleurSerializer
    queryset = models.Couleur.objects.all()

class DimensionView(viewsets.ModelViewSet):
    serializer_class = srz.DimensionSerializer
    queryset = models.Dimension.objects.all()

class ArticleView(viewsets.ModelViewSet):
    serializer_class = srz.ArticleSerializer
    queryset = models.Article.objects.all()

class NomenclatureView(viewsets.ModelViewSet):
    serializer_class = srz.NomenclatureSerializer
    queryset = models.Nomenclature.objects.all()

class ClientView(viewsets.ModelViewSet):
    serializer_class = srz.ClientSerializer
    queryset = models.Client.objects.all()
    # http_method_names = ['get', 'post']

class DevisView(viewsets.ModelViewSet):
    serializer_class = srz.DevisSerializer
    queryset = models.Devis.objects.all()

class DevisArticleView(viewsets.ModelViewSet):
    serializer_class = srz.DevisArticleSerializer
    queryset = models.DevisArticle.objects.all()

############# FORMS ##################
# class NouveauClientView(views.APIView):
#     serializer_class = srz.ClientSerializer

#     def post(self,request,format=None):
#         serializer = self.serializer_class(data=request.data)
#         if serializer.is_valid():
#             client_Obj = models.Client(
#             prenom= serializer.data.get('prenom'),
#             nom= serializer.data.get('nom'),
#             nomEntreprise= serializer.data.get('nomEntreprise'),
#             adresse= serializer.data.get('adresse'),
#             ville= serializer.data.get('ville'),
#             pays= serializer.data.get('pays'),
#             telephone= serializer.data.get('telephone'),
#             email= serializer.data.get('email'),
#             info= serializer.data.get('info')
#             )            
#             client_Obj.save()
#         return response.Response(srz.ClientSerializer(client_Obj).data,status=status.HTTP_201_CREATED)
    
# def nouveauClient(request):
#     context_dict = {'form': None}
#     form = ClientForm()

#     if request.method == 'GET':
#         context_dict['form'] = form
#     elif request.method == 'POST':
#         form = ClientForm(request.POST)
#         context_dict['form'] = form
#         if form.is_valid():
#             cleaned_data = form.cleaned_data
#             print(cleaned_data)
#             messages.success(request,'Nouveau client enregistre!')
#         else:
#             messages.error(request,'Client non-enregistre. Veuillez ressayer')
    
#     return render(request,'../frontend/templates/frontend/index.html',context_dict)
