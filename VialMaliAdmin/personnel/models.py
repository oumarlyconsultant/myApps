from django.db import models
from django.utils import timezone
from django.urls import reverse
from acceuil.models import Pays, Ville
import uuid

# Create the post model
class Departement(models.Model):
    nom = models.CharField(max_length=100,blank=False,null=False)
    departementParent = models.ForeignKey('self',null=True,blank=True,on_delete=models.RESTRICT)

    def __str__(self):
        return self.nom
    
class Poste(models.Model):    
    nom = models.CharField(max_length=100,blank=False,null=False)
    responsable = models.BooleanField(default=False)
    niveau = models.IntegerField()

    def __str__(self):
        return self.nom

class Employe(models.Model):
    # administrateur = models.ForeignKey('auth.User',on_delete=models.CASCADE)   
    numeroEmploye = models.UUIDField(default=uuid.uuid4,editable=False)
    prenom = models.CharField(max_length=50)
    nom = models.CharField(max_length=50)
    dateNaissance = models.DateField(default='1991-01-01')
    sexe = models.CharField(max_length=1,choices=(('H','HOMME'),('F','FEMME')))
    adresseDomicile = models.CharField(max_length=100)
    telephone = models.CharField(max_length=50,blank=False,null=False)
    email = models.EmailField(blank=True,null=True)
    dateEmbauche = models.DateField(blank=False,null=False,default='1991-01-01')
    dateFinEmploi = models.DateField(blank=False,null=False,default='9999-12-31')
    raisonFinEmploi = models.CharField(max_length=3,blank=False,null=False,choices=(('R','retraite'),('V','Fin volontaire'),('I','Fin involontaire'),('C','Fin contrat'),('A','Autre raison'),('n/a','non-applicable')),default='N/A')
    typeEmploi = models.CharField(max_length=1,blank=False,null=False,choices=(('P','Permanent'),('C','Contractuel')),default='P')
    salaireBase = models.FloatField(default=25000)
    bonus = models.FloatField(default=0)

    ville = models.ForeignKey(Ville,on_delete=models.RESTRICT,default=22187)
    pays = models.ForeignKey(Pays,on_delete=models.RESTRICT,default=127)
    
    poste = models.ForeignKey(Poste,on_delete=models.RESTRICT,blank=False,null=False,default=999)
    departement = models.ForeignKey(Departement,on_delete=models.RESTRICT,blank=False,null=False,default=999)

    responsable = models.ForeignKey('self',blank=True,null=True,on_delete=models.RESTRICT)

    # def get_absolute_url(self): #go back to this post
        # return reverse("gestionPersonnel:details",kwargs={'pk':self.numeroEmploye})
        # return reverse("gestionPersonnel:details",kwargs={'pk':self.numeroEmploye})

    def __str__(self):
        return (self.prenom+" "+self.nom)