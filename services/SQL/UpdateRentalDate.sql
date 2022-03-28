UPDATE rental SET rental_date = rental_date + 
    MAKE_INTERVAL(YEARS := 2021 - EXTRACT(YEAR FROM rental_date)::INTEGER)