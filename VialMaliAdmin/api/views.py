from django.shortcuts import render, redirect
from django.utils import timezone
from django.http import HttpResponse, HttpResponseRedirect, Http404, JsonResponse
from django.urls import reverse, reverse_lazy
from django.views.generic import View, ListView, DetailView, CreateView, UpdateView, TemplateView, FormView, DeleteView
from . import models
from django.core.paginator import Paginator
from django.contrib import messages
from . import serializers as srz

from rest_framework import generics, status, viewsets, status, response, views, serializers
from rest_framework.decorators import api_view
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.response import Response

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
    # permission_classes = (IsAuthenticated,)
    allowed_methods = ['get','post','put','patch']
    # lookup_field = "id"
    

    # def update(self,request, *args, **kwargs):
    #     instance = self.get_object()
    #     partial = kwargs.pop('partial',True),
    #     serializers = self.get_seri
        # data = {
        #     'prenom':  request.POST.get('prenom',None),
        #     'nom':  request.POST.get('nom',None),
        #     'dateNaissance':  request.POST.get('dateNaissance',None),
        #     'sexe':  request.POST.get('sexe',None),
        #     'adresseDomicile':  request.POST.get('adresseDomicile',None),
        #     'telephone':  request.POST.get('telephone',None),
        #     'email':  request.POST.get('email',None),
        #     'ville':  request.POST.get('ville',None),
        #     'poste':  request.POST.get('poste',None),
        #     'departement':  request.POST.get('departement',None),
        #     'responsable':  request.POST.get('responsable',None)
        # }
        # self.request.data.get('prenom',None)

        # if self.request.user.is_authenticated:
        #     updated_instance = serializer.save(author=self.request.user)
        # else:
        #     updated_instance = serializer.save()

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
    
####CREATE VIEWS
# @api_view(['POST'])
# @ensure_csrf_cookie
# def ajouterEmploye(request):
#     employe = srz.EmployeSerializer(data=request.data)
#     if employe.is_valid():
#         employe.save()
#         return response.Response(employe.data)
#     else:
#         return response.Response(status=status.HTTP_404_NOT_FOUND)

# @api_view(['GET'])
# def apiOverview(request):
#     api_urls = {
#         'List':'/employe-list/',
#         'Detail':'/employe-detail/<str:pk>',
#         'Create':'/employe-create/',
#         'Update':'/employe-update/<str:pk>',
#         'Delete':'/employe-delete/<str:pk>',
#     }
#     return Response(api_urls);

# @api_view(['GET'])
# def employeList(request):
#     employes = models.Employe.all()
#     serializer = srz.EmployeSerializer(employes,many=True)
#     return Response(srz.data)
# from django.views.decorators.csrf import ensure_csrf_cookie

# Create your views here.
# class index(TemplateView):
#     template_name = "./acceuil/acceuil.html"

# def ajouterEmploye(request):
#     context_dict = {'form':None}
#     form = EmployeForm()

#     if request.method == 'GET':
#         context_dict['form'] = form
#     elif request.method == 'POST':
#         form = EmployeForm(request.POST)
#         context_dict['form'] = form
#         if form.is_valid():
#             cleaned_data = form.cleaned_data
#             messages.success(request,'Nouvel employe ajouter')
#     else:
#         messages.error(request,"ERREUR!")
#     return render(request,'/home/oumarlyconsultant/Documents/myApps/VialMaliAdmin/frontend/templates/frontend/index.html')
