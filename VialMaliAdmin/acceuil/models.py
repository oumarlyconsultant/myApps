from django.db import models
from django.utils import timezone

# Create your models here.

class Pays(models.Model):
    pays = models.CharField(max_length=50,blank=False,null=False)
    abbrev = models.CharField(max_length=3,blank=True,null=True) 

    def __str__(self):
        return self.pays

class Ville(models.Model):
    ville = models.CharField(max_length=50,blank=False,null=False)
    lat = models.FloatField(blank=True,null=True)  
    lon = models.FloatField(blank=True,null=True)

    pays = models.ForeignKey(Pays,on_delete=models.CASCADE)

    def __str__(self):
        return self.ville
    