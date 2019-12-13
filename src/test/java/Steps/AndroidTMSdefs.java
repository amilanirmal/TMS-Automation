package Steps;
// Auth by Nirmal Gunarathna


import cucumber.api.PendingException;
import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import net.bytebuddy.implementation.bind.annotation.Super;
import org.junit.Assert;
import org.openqa.selenium.*;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeDriverService;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.remote.CapabilityType;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.io.File;
import java.util.Iterator;
import java.util.Set;
import java.util.concurrent.TimeUnit;

public class AndroidTMSdefs {

    WebDriver driver = null;

    @Before
    public void InitializeTest() {


        System.setProperty("webdriver.chrome.driver", "C:\\chromedriver.exe");
        driver = new ChromeDriver();

    }

    @Given("^I navigate to URL \"([^\"]*)\"$")
    public void iNavigateToURL(String arg0) throws Throwable {

        driver.get(arg0);
    }

    @And("^I enter the username \"([^\"]*)\" with id of username \"([^\"]*)\"$")
    public void iEnterTheUsernameWithIdOfUsername(String arg0, String arg1) throws Throwable {

        driver.findElement(By.id(arg1)).sendKeys(arg0);
        //System.out.println("The UserName is "+arg0);
    }

    @And("^I enter the password \"([^\"]*)\" with id of password \"([^\"]*)\"$")
    public void iEnterThePasswordWithIdOfPassword(String arg0, String arg1) throws Throwable {
        driver.findElement(By.id(arg1)).sendKeys(arg0);
        //System.out.println("The Password is "+arg0);
    }

    @Then("^I click Login button with id \"([^\"]*)\"$")
    public void iClickLoginButtonWithId(String arg0) throws Throwable {
        driver.findElement(By.xpath(arg0)).submit();
        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
    }

    @Then("^I get error message \"([^\"]*)\" testcase id \"([^\"]*)\"$")
    public void iGetErrorMessageTestcaseId(String arg0, String arg1) throws Throwable {
        driver.manage().timeouts().implicitlyWait(15, TimeUnit.SECONDS);


        if (arg1.equalsIgnoreCase("1")) {
            driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
            //Assert.assertEquals("http://www.epictechdev.com:8083/TMS_V1.00/CheckUserLogin.blb",driver.getCurrentUrl());


        } else if (arg1.equalsIgnoreCase("2")) {
            String msg = driver.findElement(By.xpath(arg0)).getText();
            Assert.assertEquals("Invaild user name or password", msg);
            System.out.println("Switch for ==> " + msg);
        } else if (arg1.equalsIgnoreCase("3")) {
            String msg = driver.findElement(By.xpath(arg0)).getText();
            Assert.assertEquals("Invaild user name or password", msg);
        } else if (arg1.equalsIgnoreCase("4")) {
            String msg = driver.findElement(By.xpath(arg0)).getText();
            Assert.assertEquals("Empty user name", msg);
        }
    }
    @Then("^I click on side section dropdwon bar with xpath \"([^\"]*)\"$")
    public void iClickOnSideSectionDropdwonBarWithXpath(String arg0) throws Throwable {
        driver.findElement(By.xpath(arg0)).click();

    }
    @Then("^I click on Terminal section link with xpath \"([^\"]*)\"$")
    public void iClickOnTerminalSectionLinkWithXpath(String arg0) throws Throwable {
        // WebDriverWait wait = new WebDriverWait(driver, 40);
        //wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath(arg0)));
        driver.findElement(By.xpath(arg0)).click();
    }

    // reset button
    @And("^I click reset button to reset all field \"([^\"]*)\"$")
    public void iClickResetButtonToResetAllField(String arg0) throws Throwable {
        driver.findElement(By.xpath(arg0)).click();
    }

    // TMS features testing (Belongs to TMSfeature.
    @Then("^I click on TMS on link \"([^\"]*)\"$")
    public void iClickOnTMSOnLink(String arg0) throws Throwable {
        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
        String parent = driver.getWindowHandle();
        driver.findElement(By.xpath(arg0)).click();
        Set<String> allWindows = driver.getWindowHandles();
        int count = allWindows.size();
        for (String chlid : allWindows) {
            if (!parent.equalsIgnoreCase(chlid)) {
                driver.switchTo().window(chlid);
            }
        }
    }

    // Terminal model management ===========================
    @Then("^I click on side section bar \"([^\"]*)\"$")
    public void iClickOnSideSectionBar(String arg0) throws Throwable {
        driver.manage().timeouts().implicitlyWait(15, TimeUnit.SECONDS);
        driver.findElement(By.linkText(arg0)).click();
        driver.manage().timeouts().implicitlyWait(15, TimeUnit.SECONDS);
        //driver.switchTo().alert().accept();


    }

    @And("^I click on add  mark for add application version with xpath \"([^\"]*)\"$")
    public void iClickOnAddMarkForAddApplicationVersionWithXpath(String arg0) throws Throwable {
        driver.findElement(By.xpath(arg0)).click();
    }

    // Add currency---------------------------------------------------

    @And("^I enter currency code \"([^\"]*)\" with id \"([^\"]*)\"$")
    public void iEnterCurrencyCodeWithId(String arg0, String arg1) throws Throwable {
        driver.findElement(By.id(arg1)).sendKeys(arg0);
    }
    @Then("^I enter alpha code \"([^\"]*)\" with id \"([^\"]*)\"$")
    public void iEnterAlphaCodeWithId(String arg0, String arg1) throws Throwable {
        driver.findElement(By.id(arg1)).sendKeys(arg0);
    }

    @And("^I enter currency descrption \"([^\"]*)\" id \"([^\"]*)\"$")
    public void iEnterCurrencyDescrptionId(String arg0, String arg1) throws Throwable {
        driver.findElement(By.id(arg1)).sendKeys(arg0);
    }

    @And("^I enter exponent \"([^\"]*)\" with id \"([^\"]*)\"$")
    public void iEnterExponentWithId(String arg0, String arg1) throws Throwable {
        driver.findElement(By.id(arg1)).sendKeys(arg0);
    }

    @Then("^I click enter button to add currency \"([^\"]*)\"$")
    public void iClickEnterButtonToAddCurrency(String arg0) throws Throwable {
        driver.findElement(By.id(arg0)).click();
        driver.manage().timeouts().implicitlyWait(15, TimeUnit.SECONDS);
    }

    @Then("^I pass all values for validation \"([^\"]*)\" ,\"([^\"]*)\" ,\"([^\"]*)\", \"([^\"]*)\"$")
    public void iPassAllValuesForValidation(String arg0, String arg1, String arg2, String arg3) throws Throwable {
        driver.manage().timeouts().implicitlyWait(15, TimeUnit.SECONDS);

        String msg = driver.findElement(By.xpath("//div[@class='ui-state-error ui-corner-all']//p//span[not(@id) and not(@class)]"
        )).getText();
        if (arg0.isEmpty() && !arg1.isEmpty() && !arg2.isEmpty() && !arg3.isEmpty()) {
            Assert.assertEquals("Empty currency code.", msg);
        } else if (!arg0.isEmpty() && arg1.isEmpty() && !arg2.isEmpty() && !arg3.isEmpty()) {
            Assert.assertEquals("Empty currency code alpha.", msg);
        } else if (!arg0.isEmpty() && !arg1.isEmpty() && arg2.isEmpty() && !arg3.isEmpty()) {
            Assert.assertEquals("Empty description.", msg);
        } else if (!arg0.isEmpty() && !arg1.isEmpty() && !arg2.isEmpty() && arg3.isEmpty()) {
            //Assert.assertTrue(msg.equalsIgnoreCase("Request already exist for the given Currency code.") || msg.equalsIgnoreCase("Currency requested to be created."));
            Assert.assertEquals("Request already exist for the given Currency code.", msg);
            Assert.assertEquals("Currency requested to be created.", msg);
        } else if (arg0.isEmpty() && arg1.isEmpty() && arg2.isEmpty() && arg3.isEmpty()) {
            Assert.assertEquals("Empty currency code.", msg);
        }
    }
}
