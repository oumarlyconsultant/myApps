from django.db import models
from django.db import models
from acceuil.models import Pays, Ville
from inventaires_et_stock.models import Article
from personnel.models import Employe
from django.urls import reverse
from django.utils import timezone

# Create your models here.
class Client(models.Model):
    prenom = models.CharField(max_length=50,blank=False,null=False)
    nom = models.CharField(max_length=50,blank=False,null=False)
    nomEntreprise = models.CharField(max_length=50,blank=True,null=True)
    adresse = models.CharField(max_length=100,blank=True,null=True)
    telephone = models.CharField(max_length=50,blank=True,null=True)
    email = models.EmailField(blank=True,null=True)
    info = models.CharField(max_length=200,blank=True,null=True)

    ville = models.ForeignKey(Ville,on_delete=models.RESTRICT,blank=True,null=True,default=22187)
    pays = models.ForeignKey(Pays,on_delete=models.RESTRICT,blank=True,null=True,default=127)

    def get_absolute_url(self): #go back to this post
        # return reverse("gestionPersonnel:details",kwargs={'pk':self.numeroEmploye})
        return reverse("ventes:clientsDetails",kwargs={'pk':self.id})

    def __str__(self):
        return self.prenom+" "+self.nom+" "+str(self.nomEntreprise)

class Devis(models.Model):
    date = models.DateField(default=timezone.now())
    remise = models.FloatField(blank=True,null=True,default=0)

    client = models.ForeignKey(Client,default=999,on_delete=models.RESTRICT)
    responsable = models.ForeignKey(Employe,default=999,on_delete=models.RESTRICT,related_name='responsableTravail')
    agentCommercial = models.ForeignKey(Employe,default=999,on_delete=models.RESTRICT,related_name='createurDevis')
    article = models.ManyToManyField(Article,through='DevisArticle')

class DevisArticle(models.Model):
    quantite = models.FloatField(default=0)

    devis = models.ForeignKey(Devis,on_delete=models.CASCADE,default=999)
    article = models.ForeignKey(Article,on_delete=models.CASCADE,default=999)

    

