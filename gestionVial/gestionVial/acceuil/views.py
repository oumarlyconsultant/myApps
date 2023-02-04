from django.shortcuts import render
from django.http import HttpResponse
from django.http import Http404

# Create your views here.
def page_acceuil(request):
    return render(request,"page_acceuil.html",{})