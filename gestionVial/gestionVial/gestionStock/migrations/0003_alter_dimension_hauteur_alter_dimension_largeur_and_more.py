# Generated by Django 4.1.6 on 2023-02-19 19:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('gestionStock', '0002_alter_categoriemat_info_alter_classemat_info_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='dimension',
            name='hauteur',
            field=models.FloatField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='dimension',
            name='largeur',
            field=models.FloatField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='dimension',
            name='profondeur',
            field=models.FloatField(blank=True, null=True),
        ),
    ]
