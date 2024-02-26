package org.apache.fineract.portfolio.group.domain;
import jakarta.validation.constraints.NotBlank;
import lombok.Getter;
import lombok.Setter;
public class CreateSignatoryDTO {
    @Getter
    @Setter
    private Long clientId;

    @Getter
    @Setter
    private Long groupId;
}
