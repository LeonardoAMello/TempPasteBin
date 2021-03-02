//Obs.: Rascunho, não sei se a sintáxe está correta

// Função que desenha um array float[][] em um Graphics2D

public void PaintTexture(Graphics g, float texture[][], int width, int height) {
		Graphics2D g2d = (Graphics2D) g;

		for (int x = 0; x < width; i++) {
			for (int x = 0; x < width; i++) {
				float c = texture[x][y] * 255;
				g.setColor(new Color(c, c, c));
				g.drawLine(x,y,x,y);
			}
		}

// Função que cria um array float[][] com um círculo nele

	public float[][] GenerateCircleTexture(int width, int height, int centerX, int centerY, float radius)
    {
        float[][] texture = new float[width][height];

        for (int x = 0; x < width; x++)
            for (int y = 0; y < height; y++)
            {
                float distance = radius ^ 2 - (((centerX - x) ^ 2) + ((centerY - y) ^ 2));

                if (distance / radius ^ 2 >= 0)
                    texture[x][y] = 1;
                else 
                    texture[x][y] = 0;
            }

        return texture;
    }