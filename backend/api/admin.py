from django.contrib import admin
from api.models import User, Product, Account, ProdcutReview, Address
# Register your models here.

class UserAdmin(admin.ModelAdmin):
    list_display=('id','email', 'username','firstname', 'lastname')

class ProductAdmin(admin.ModelAdmin):
    list_display=('id', 'product_name', 'main_catagory', 'catagory', 'image', 'total_stock')

admin.site.register(User, UserAdmin)
admin.site.register(ProdcutReview)
admin.site.register(Product, ProductAdmin)
admin.site.register(Account)
admin.site.register(Address)
