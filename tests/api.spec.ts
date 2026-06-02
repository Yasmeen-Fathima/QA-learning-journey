import { test, expect } from '@playwright/test';

test('GET /api/brands - retrieve all brands', async ({ request }) => {
  // Make the request
  const response = await request.get('https://api-v1.practicesoftwaretesting.com/brands');
  
  // Assert the status code
  expect(response.status()).toBe(200);
  
  // Parse the response as JSON
  const brands = await response.json();
  
  // Assert that we got brands back
  expect(Array.isArray(brands)).toBeTruthy();
  expect(brands.length).toBeGreaterThan(0);
  
  // Assert the structure of the first brand
  const firstBrand = brands[0];
  expect(firstBrand).toHaveProperty('id');
  expect(firstBrand).toHaveProperty('name');
  expect(firstBrand).toHaveProperty('slug');
});
let createdBrandId: number;
  test('Post /api/brands - add a new brand', async ({ request }) => {
    // Make the request
    const response = await request.post('https://api-v1.practicesoftwaretesting.com/brands',{ data: {
      "name": "Test5Brand",
      "slug": "Test5Brand"
    }});
    
    // Assert the status code
    expect(response.status()).toBe(201);
    
    // Parse the response as JSON
    const brand = await response.json();
    
    // Assert that we got brands back
    //expect(Array.isArray(brands)).toBeTruthy();
    createdBrandId = brand.id;
    expect(brand).toHaveProperty('id');
    expect(brand).toHaveProperty('name');
    expect(brand).toHaveProperty('slug');
    expect(brand.name).toBe('Test5Brand')
  });

   test('Update /api/brands - update brand', async ({ request }) => {
    // Make the request
    const response = await request.put(`https://api-v1.practicesoftwaretesting.com/brands/${createdBrandId}`,{ data: {
      "name": "Test6Brand",
      "slug": "Test6Brand"
    }});
    
    // Assert the status code
    expect(response.status()).toBe(200);
    
    // Parse the response as JSON
    const brand = await response.json();
    
    // Assert that we got brands back
    expect(brand).toHaveProperty('success');
    
  });

    test('Delete /api/brands - delete a brand', async ({ request }) => {
    // Make the request
    const response = await request.delete(`https://api-v1.practicesoftwaretesting.com/brands/${createdBrandId}`);
    
    // Assert the status code
    expect(response.status()).toBe(204);
    
  });
  //testing pr comments