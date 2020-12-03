def benef_ebay(price,prix_achat,quantity):
    frais = (price*11)/100 + 1.5 + (prix_achat*quantity)
    return(price - frais)
prix_unit = 1.072
print(benef_ebay(15.99,prix_unit,10))