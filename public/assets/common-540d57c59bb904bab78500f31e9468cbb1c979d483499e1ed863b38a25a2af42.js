$(document).on("turbolinks:load",function(){jQuery(function(a){a("tr[data-link]").click(function(){window.location=a(this).data("link")}),a(".with-chosen").chosen(),a("#car_car_manufactory_id").on("change",function(){var n=a(this).data().carModelsPath,t=a(this).val(),o=a("#car_car_model_id");o.html(""),a.ajax({url:n,method:"GET",data:"car_manufactory_id="+t}).done(function(n){a.each(n.car_models,function(n,t){o.append(a("<option>").attr("value",t.id).text(t.model))})}).always(function(){o.trigger("chosen:updated")})})})});