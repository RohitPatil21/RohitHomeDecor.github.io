from django.db import models

# Create your models here.
class Contact(models.Model):
    name=models.CharField(max_length=50 , blank=False, null=False)
    email=models.CharField(max_length=50, blank=False, null=False)
    phone=models.CharField(max_length=12, blank=False, null=False)
    desc=models.TextField(blank=False, null=False)
    date=models.DateField()

# For admin panel name view 
    def __str__(self):
        return self.name
