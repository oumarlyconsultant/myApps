from django.shortcuts import render
from django.http import HttpResponse
from django.http import Http404

# Create your views here.
def repertoire_employes(request):
    return render(request,"repertoire_employes.html",{})