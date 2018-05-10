<template>
    <div>
        <h1
            :class="cssClasses"
            class="heading"
        />
    </div>
</template>

<script>
const testVeryLongMethodName = () => {};

testVeryLongMethodName(
    testVeryLongMethodName,
    testVeryLongMethodName,
    testVeryLongMethodName,
);

export default {
    data: () => ({
        cssClasses: "heading--dark",
    }),
};
</script>
