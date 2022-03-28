SELECT cr.customer_id,
	concat(first_name, ' ', last_name) AS cust_name,
	st.store_id,
	fm.film_id,
	fm.title,
	rt.rental_id,
	rt.rental_date
FROM customer cr
	JOIN store st ON cr.store_id = st.store_id
	JOIN rental rt ON cr.customer_id = rt.customer_id
 	JOIN inventory iv ON rt.inventory_id = iv.inventory_id
	JOIN film fm ON iv.film_id = fm.film_id
WHERE rental_date >= DATE '2021-01-01' AND rental_date < DATE '2022-01-01'
ORDER BY cust_name, rental_date ASC