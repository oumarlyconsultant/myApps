# Generated by Django 4.1.7 on 2023-04-08 21:03

import datetime
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ("inventaires_et_stock", "0002_remove_classe_indproduitfini_and_more"),
        ("personnel", "0005_remove_poste_responsable"),
        ("ventes", "0005_alter_client_nomentreprise_alter_devis_date"),
    ]

    operations = [
        migrations.AlterField(
            model_name="client",
            name="adresse",
            field=models.CharField(
                blank=True, max_length=100, null=True, verbose_name="Adresse"
            ),
        ),
        migrations.AlterField(
            model_name="client",
            name="email",
            field=models.EmailField(
                blank=True, max_length=254, null=True, verbose_name="Email"
            ),
        ),
        migrations.AlterField(
            model_name="client",
            name="info",
            field=models.CharField(
                blank=True, max_length=200, null=True, verbose_name="Autres infos"
            ),
        ),
        migrations.AlterField(
            model_name="client",
            name="nom",
            field=models.CharField(max_length=50, verbose_name="Nom"),
        ),
        migrations.AlterField(
            model_name="client",
            name="nomEntreprise",
            field=models.CharField(
                blank=True, max_length=50, null=True, verbose_name="Nom de l'entreprise"
            ),
        ),
        migrations.AlterField(
            model_name="client",
            name="prenom",
            field=models.CharField(max_length=50, verbose_name="Prenom"),
        ),
        migrations.AlterField(
            model_name="client",
            name="telephone",
            field=models.CharField(
                blank=True, max_length=50, null=True, verbose_name="Telephone"
            ),
        ),
        migrations.AlterField(
            model_name="devis",
            name="agentCommercial",
            field=models.ForeignKey(
                default=999,
                on_delete=django.db.models.deletion.RESTRICT,
                related_name="createurDevis",
                to="personnel.employe",
                verbose_name="Nom de l'agent comm.",
            ),
        ),
        migrations.AlterField(
            model_name="devis",
            name="article",
            field=models.ManyToManyField(
                through="ventes.DevisArticle",
                to="inventaires_et_stock.article",
                verbose_name="Article",
            ),
        ),
        migrations.AlterField(
            model_name="devis",
            name="client",
            field=models.ForeignKey(
                default=999,
                on_delete=django.db.models.deletion.RESTRICT,
                to="ventes.client",
                verbose_name="Nom du client",
            ),
        ),
        migrations.AlterField(
            model_name="devis",
            name="date",
            field=models.DateField(
                default=datetime.datetime(
                    2023, 4, 8, 21, 3, 58, 140651, tzinfo=datetime.timezone.utc
                ),
                verbose_name="Date",
            ),
        ),
        migrations.AlterField(
            model_name="devis",
            name="remise",
            field=models.FloatField(
                blank=True, default=0, null=True, verbose_name="Remise %"
            ),
        ),
        migrations.AlterField(
            model_name="devis",
            name="responsable",
            field=models.ForeignKey(
                default=999,
                on_delete=django.db.models.deletion.RESTRICT,
                related_name="responsableTravail",
                to="personnel.employe",
                verbose_name="Nom du resp.",
            ),
        ),
        migrations.AlterField(
            model_name="devisarticle",
            name="article",
            field=models.ForeignKey(
                default=999,
                on_delete=django.db.models.deletion.CASCADE,
                to="inventaires_et_stock.article",
                verbose_name="Article",
            ),
        ),
        migrations.AlterField(
            model_name="devisarticle",
            name="devis",
            field=models.ForeignKey(
                default=999,
                on_delete=django.db.models.deletion.CASCADE,
                to="ventes.devis",
                verbose_name="Numero du devis",
            ),
        ),
        migrations.AlterField(
            model_name="devisarticle",
            name="quantite",
            field=models.FloatField(default=0, verbose_name="Quantite"),
        ),
    ]
