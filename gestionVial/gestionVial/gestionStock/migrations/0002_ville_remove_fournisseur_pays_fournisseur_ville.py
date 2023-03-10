# Generated by Django 4.1.7 on 2023-02-22 12:03

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ("gestionStock", "0001_initial"),
    ]

    operations = [
        migrations.CreateModel(
            name="Ville",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("ville", models.CharField(max_length=50)),
                ("pays", models.CharField(max_length=50)),
                ("lat", models.FloatField(blank=True, null=True)),
                ("lon", models.FloatField(blank=True, null=True)),
                ("abbrev", models.CharField(blank=True, max_length=3, null=True)),
            ],
        ),
        migrations.RemoveField(model_name="fournisseur", name="pays",),
        migrations.AddField(
            model_name="fournisseur",
            name="ville",
            field=models.ForeignKey(
                blank=True,
                null=True,
                on_delete=django.db.models.deletion.RESTRICT,
                to="gestionStock.ville",
            ),
        ),
    ]
