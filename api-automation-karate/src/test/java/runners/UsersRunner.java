package runners;

import com.intuit.karate.Results;
import com.intuit.karate.Runner;
import io.qameta.allure.karate.AllureKarate;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class UsersRunner {

    @Test
    void testUsers() {
        Results results = Runner.path(
                "classpath:users/users-crud.feature",
                "classpath:users/users-negative.feature"
        )
        .hook(new AllureKarate())
        .parallel(1);

        assertEquals(0, results.getFailCount(), results.getErrorMessages());
    }
}