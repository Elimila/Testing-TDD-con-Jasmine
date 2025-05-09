// 1.

describe('Función esPar', () => {
  
    it('debería existir una función llamada esPar', () => {
      expect(typeof esPar).toBe('function');
    });
  
    it('debería devolver true si el número es par (ej: 4)', () => {
      const result = esPar(4);
      expect(result).toBe(true);
    });
  
    it('debería devolver false si el número es impar (ej: 3)', () => {
      const result = esPar(3);
      expect(result).toBe(false);
    });
  
    it('debería devolver true si el número es 0 (caso especial)', () => {
      const result = esPar(0);
      expect(result).toBe(true);
    });
  
    it('debería devolver false si el número es negativo impar (-5)', () => {
      const result = esPar(-5);
      expect(result).toBe(false);
    });
  
    it('debería devolver true si el número es negativo par (-6)', () => {
      const result = esPar(-6);
      expect(result).toBe(true);
    });
  
  });

  //2

  describe('Función factorial', () => {

    it('debería existir una función llamada factorial', () => {
      expect(typeof factorial).toBe('function');
    });
  
    it('debería devolver 1 si el número es 0', () => {
      expect(factorial(0)).toBe(1);
    });
  
    it('debería devolver 1 si el número es 1', () => {
      expect(factorial(1)).toBe(1);
    });
  
    it('debería devolver 2 si el número es 2', () => {
      expect(factorial(2)).toBe(2);
    });
  
    it('debería devolver 6 si el número es 3', () => {
      expect(factorial(3)).toBe(6);
    });
  
    it('debería devolver 24 si el número es 4', () => {
      expect(factorial(4)).toBe(24);
    });
  
    it('debería devolver 120 si el número es 5', () => {
      expect(factorial(5)).toBe(120);
    });
  
  });

  
  


  