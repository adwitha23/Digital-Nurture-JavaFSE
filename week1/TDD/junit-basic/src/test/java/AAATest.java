import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import static org.junit.Assert.*;

public class AAATest {

    int a;
    int b;

    @Before
    public void setUp() {
        a = 2;
        b = 3;
    }

    @Test
    public void testAddition() {
        // Arrange
        // a = 2, b = 3

        // Act
        int result = a + b;

        // Assert
        assertEquals(5, result);
    }

    @After
    public void tearDown() {
        System.out.println("Test Finished");
    }
}