from . import views
from django.urls import path

urlpatterns = [
    path('register/', views.UserRegisterView.as_view()),
    path('login/', views.UserLoginView.as_view()),
    path('account/', views.UserProfileView.as_view()),
    path('home/', views.home.as_view()),
    path('product/add/', views.ProdcutAddView.as_view()),
    path('product/', views.ProductSortView.as_view()),
    path('product/details/', views.ProductDetailsView.as_view()),
    path('staff/', views.StaffLoginView.as_view()),
    path('staff/register/', views.StaffRegisterView.as_view()),
    path('product/review/', views.ProductReviewshowView.as_view()),
    path('search/', views.SerachView.as_view()),
]
