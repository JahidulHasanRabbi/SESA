from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin
from django.db import models
from django.utils import timezone
import uuid
from .managers import CustomUserManager


class User(AbstractBaseUser, PermissionsMixin):
    id = models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, unique=True)
    firstname = models.CharField(max_length=50)
    lastname = models.CharField(max_length=50)
    email = models.EmailField()
    username = models.CharField(max_length=250, unique=True)
    date_joined = models.DateTimeField(default=timezone.now)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)
    can_view = models.BooleanField(default=True)
    can_edit = models.BooleanField(default=False)
    can_delete = models.BooleanField(default=False)
    can_upload = models.BooleanField(default=False)
    USERNAME_FIELD = 'username'
    REQUIRED_FIELDS = []

    objects = CustomUserManager()

    def __str__(self):
         return self.username


#Billilng Address
class Address(models.Model):
    id = models.UUIDField(default=uuid.uuid4,primary_key=True, editable=False, unique=True)
    user = models.ForeignKey(User,on_delete=models.CASCADE)
    billing_address = models.TextField()
    delivary_address =  models.TextField()

#Account 

class Account(models.Model):
    id = models.UUIDField(default=uuid.uuid4,editable=False, primary_key=True,  unique=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    Address = models.ForeignKey(Address, on_delete=models.CASCADE)


#Image paht
def imagepath(instance, filename):
    return 'product/{filename}'.format(filename=filename)


#Product Path
class Product(models.Model):
    id = models.UUIDField(default=uuid.uuid4,
                        primary_key=True,
                        unique=True,
                        editable=False)
    product_name = models.CharField(max_length=250)
    brand = models.CharField(max_length=100)
    main_catagory = models.CharField(max_length=50)
    catagory = models.CharField(max_length=50)
    image = models.ImageField(upload_to=imagepath, default='/hello.jpg')
    stock = models.BooleanField(default=True)
    total_review = models.PositiveIntegerField(default=0)
    data_uploaded = models.DateField(default=timezone.now)
    total_stock = models.PositiveIntegerField(default=0)
    price = models.CharField(max_length=50)
    extra_informations = models.TextField(max_length=300)

    
#Product Review
class ProdcutReview(models.Model):
    id = models.UUIDField(primary_key=True, editable=False, unique=True)
    product= models.ForeignKey(Product, 
                                        verbose_name=("Product is Forganiz Kry"), 
                                        on_delete=models.CASCADE)
    user = models.ForeignKey(Account, 
                                verbose_name=("Customer Is Foreignkey"), 
                                on_delete=models.CASCADE)
    review_area = models.TextField(("Prodcut Review Area"))
    star = models.CharField(max_length=5)
    review_date = models.DateField(auto_now=True, auto_now_add=False)
    image = models.ImageField(upload_to=imagepath)
    date_updated = models.DateField(default=timezone.now)


