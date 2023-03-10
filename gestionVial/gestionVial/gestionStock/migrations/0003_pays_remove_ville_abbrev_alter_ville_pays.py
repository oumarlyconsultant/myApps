# Generated by Django 4.1.6 on 2023-02-26 16:58

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('gestionStock', '0002_ville_remove_fournisseur_pays_fournisseur_ville'),
    ]

    operations = [
        migrations.CreateModel(
            name='Pays',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('pays', models.CharField(max_length=50)),
                ('abbrev', models.CharField(blank=True, max_length=3, null=True)),
            ],
        ),
        migrations.RemoveField(
            model_name='ville',
            name='abbrev',
        ),
        migrations.AlterField(
            model_name='ville',
            name='pays',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='gestionStock.pays'),
        ),
    ]
